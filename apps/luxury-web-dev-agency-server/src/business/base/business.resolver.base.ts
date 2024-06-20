/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Business } from "./Business";
import { BusinessCountArgs } from "./BusinessCountArgs";
import { BusinessFindManyArgs } from "./BusinessFindManyArgs";
import { BusinessFindUniqueArgs } from "./BusinessFindUniqueArgs";
import { CreateBusinessArgs } from "./CreateBusinessArgs";
import { UpdateBusinessArgs } from "./UpdateBusinessArgs";
import { DeleteBusinessArgs } from "./DeleteBusinessArgs";
import { BusinessService } from "../business.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Business)
export class BusinessResolverBase {
  constructor(
    protected readonly service: BusinessService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Business",
    action: "read",
    possession: "any",
  })
  async _businessesMeta(
    @graphql.Args() args: BusinessCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Business])
  @nestAccessControl.UseRoles({
    resource: "Business",
    action: "read",
    possession: "any",
  })
  async businesses(
    @graphql.Args() args: BusinessFindManyArgs
  ): Promise<Business[]> {
    return this.service.businesses(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Business, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Business",
    action: "read",
    possession: "own",
  })
  async business(
    @graphql.Args() args: BusinessFindUniqueArgs
  ): Promise<Business | null> {
    const result = await this.service.business(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Business)
  @nestAccessControl.UseRoles({
    resource: "Business",
    action: "create",
    possession: "any",
  })
  async createBusiness(
    @graphql.Args() args: CreateBusinessArgs
  ): Promise<Business> {
    return await this.service.createBusiness({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Business)
  @nestAccessControl.UseRoles({
    resource: "Business",
    action: "update",
    possession: "any",
  })
  async updateBusiness(
    @graphql.Args() args: UpdateBusinessArgs
  ): Promise<Business | null> {
    try {
      return await this.service.updateBusiness({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Business)
  @nestAccessControl.UseRoles({
    resource: "Business",
    action: "delete",
    possession: "any",
  })
  async deleteBusiness(
    @graphql.Args() args: DeleteBusinessArgs
  ): Promise<Business | null> {
    try {
      return await this.service.deleteBusiness(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
