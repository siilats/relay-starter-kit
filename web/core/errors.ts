/**
 * @copyright 2016-present Kriasoft (https://git.io/vMINh)
 */

export class NotFoundError extends Error {
  status = 404;

  constructor(message = "Page not found") {
    super(message);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}
