import { IData, IMiddleware, IResponse } from '../interfaces/IMiddleware';
import { IRequest } from '../interfaces/IRequest';
import { GetRolePermssionsUseCase } from '../useCases/GetRolePermissionUserCase';

export class AuthorizationMiddleware implements IMiddleware {
  constructor(
    private readonly requiredPermissions: string[],
    private readonly getRolePermissionsUseCase: GetRolePermssionsUseCase
  ) {}

  async handle({ account }: IRequest): Promise<IResponse | IData> {
    if (!account) {
      return {
        statusCode: 403,
        body: {
          error: 'Access Denied.',
        },
      };
    }

    const { permissionsCodes } = await this.getRolePermissionsUseCase.execute({
      roleId: account.role
    });

    const isAllowed = this.requiredPermissions.some(code => permissionsCodes.includes(code));

    if(!isAllowed) {
      return {
        statusCode: 403,
        body: {
          error: 'Access Denied.',
        },
      };
    }

    return {
      data: {},
    };
  }

}
