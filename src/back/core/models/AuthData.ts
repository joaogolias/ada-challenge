import { Expose } from 'class-transformer';

export class AuthData {
  @Expose()
  public idToken?: string;

  @Expose()
  public login?: string;

  @Expose()
  public senha?: string;

  @Expose()
  public originPath?: string;
}
