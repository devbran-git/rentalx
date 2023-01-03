import { Specifications } from "../../model/Specifications";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../ISpecificationRepository";

class SpecificationsRepository implements ISpecificationRepository {
  private specifications: Specifications[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specifications = new Specifications();

    Object.assign(specifications, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specifications);
  }

  findByName(name: string): Specifications {
    const specifications = this.specifications.find(
      (specification) => specification.name === name
    );
    return specifications;
  }
}

export { SpecificationsRepository };
