import { GetRolePermssionsUseCase } from '../application/useCases/GetRolePermissionUserCase';

export function makeGetRolePermissionsUseCase() {
  return new GetRolePermssionsUseCase();
}
