const LoginUserUseCase = require('../../../../Applications/use_case/LoginUserUseCase');

class AuthenticationsHandler {
  constructor(container) {
    this._container = container;

    this.loginUserHandler = this.loginUserHandler.bind(this);
  }

  async loginUserHandler(request, h) {
    const loginUserUseCase = this._container.getInstance(LoginUserUseCase.name);
    const { accessToken, refreshToken } = await loginUserUseCase.execute(request.payload);

    const response = h.response({
      status: 'success',
      data: {
        refreshToken,
        accessToken,
      },
    });
    response.code(201);
    return response;
  }
}

module.exports = AuthenticationsHandler;
