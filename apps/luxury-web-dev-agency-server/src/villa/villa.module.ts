import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VillaModuleBase } from "./base/villa.module.base";
import { VillaService } from "./villa.service";
import { VillaController } from "./villa.controller";
import { VillaResolver } from "./villa.resolver";

@Module({
  imports: [VillaModuleBase, forwardRef(() => AuthModule)],
  controllers: [VillaController],
  providers: [VillaService, VillaResolver],
  exports: [VillaService],
})
export class VillaModule {}
