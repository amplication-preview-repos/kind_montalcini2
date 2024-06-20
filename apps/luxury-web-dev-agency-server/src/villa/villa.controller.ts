import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VillaService } from "./villa.service";
import { VillaControllerBase } from "./base/villa.controller.base";

@swagger.ApiTags("villas")
@common.Controller("villas")
export class VillaController extends VillaControllerBase {
  constructor(
    protected readonly service: VillaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
