import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor() {}

    private extractTokenFromHeader(request: Request): string {
        return request.header('token');
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const ctx = GqlExecutionContext.create(context);
        const req = ctx.getContext().req as Request;
        const token = this.extractTokenFromHeader(req);
        if (token != 'authToken') {
            throw new Error('Unauthenticated!');
        }
        return true;
    }
}
