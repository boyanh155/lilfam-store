class BaseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

class ApiError extends BaseError {
  constructor(message: string, public status: number) {
    super(message);
    this.status = status;
  }
}
class NotFoundError extends ApiError {
  constructor() {
    console.log("Not found");
    super("Not found", 404);
  }
}

class BadRequestError extends ApiError {
  constructor() {
    super("Bad request", 400);
  }
}

class UnauthorizedError extends ApiError {
  constructor() {
    super("Unauthorized", 401);
  }
}

class ForbiddenError extends ApiError {
  constructor() {
    super("Forbidden", 403);
  }
}

class InternalServerError extends ApiError {
  constructor() {
    super("Internal server error", 500);
  }
}

export {
  BaseError,
  ApiError,
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  InternalServerError,
};
