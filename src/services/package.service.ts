import { HttpException } from "../exceptions/HttpException";
import { PackageModel } from "../models/package.model";
import { Package } from "../proto/package/Package";

export class PackageService {
    public static async findAllPackage(): Promise<Package[]> {
        try {
            const packages: Package[] = await PackageModel.find();
            return packages;
          } catch (error) {
            throw new HttpException(500, 'Error retrieving packages');
          }
    }

    public async findPackageById(packageId: string): Promise<Package> {
        try {
            const findPackage: Package| null = await PackageModel.findOne({ _id: packageId });
            if (!findPackage) throw new HttpException(400, `Package with ID: ${packageId} doesn't exist`);
            return findPackage;
          } catch (error) {
            throw new HttpException(500, `Error finding package with ID: ${packageId}`);
          }
    }
  
    public static async createPackage(
      packageData: Package,
    ): Promise<Package> {
        try {
            const createPackageData: Package = await PackageModel.create(packageData);
            return createPackageData;
          } catch (error) {
            throw new HttpException(500, 'Error creating package');
          }
    }
  
    public async updatePackage(
      packageId: string,
      updatePackageData: Package,
    ): Promise<Package> {
        try {
            const packageData: Package| null = await PackageModel.findById(packageId);
            if (!packageData) {
              throw new HttpException(404, "Package with this ID is not found");
            }
      
            const updatedPackageData: Package| null = await PackageModel.findByIdAndUpdate(
              packageId,
              { $set: updatePackageData },
              { new: true }
            );
      
            if (!updatedPackageData) {
              throw new HttpException(500, 'Error updating package');
            }
      
            return updatedPackageData;
          } catch (error) {
            throw new HttpException(500, `Error updating package with ID: ${packageId}`);
          }
    }
  
    public async deletePackage(
      packageId: string,
    ): Promise<Package> {
        try {
            const packageData: Package| null = await PackageModel.findById(packageId);
            if (!packageData) {
              throw new HttpException(404, "Package with this ID is not found");
            }
      
            const deletePackageById: Package| null = await PackageModel.findByIdAndDelete(packageId);
            if (!deletePackageById) {
              throw new HttpException(409, "Package doesn't exist");
            }
      
            return deletePackageById;
          } catch (error) {
            throw new HttpException(500, `Error deleting package with ID: ${packageId}`);
          }
    }
  }
