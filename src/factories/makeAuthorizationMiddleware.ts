import { AuthorizationMiddleware } from '../application/middlewares/AuthorizationMiddleware';
import { makeGetRolePermissionsUseCase } from './makeGetRolePermissionsUserCase';

export function makeAuthorizationMiddleware(requiredPermissions: string[]) {
  return new AuthorizationMiddleware(requiredPermissions, makeGetRolePermissionsUseCase());
}
