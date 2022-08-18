import { ModuleWithProviders, Provider, Type } from '@angular/core';

export interface ICustomizedModule<T> {
  ngModule: Type<T>;
  providers?: Provider[];
  declarations?: Array<Type<any> | any[]>;
  imports?: Array<Type<any> | ModuleWithProviders<any> | any[]>;
  exports?: Array<Type<any> | any[]>;
}
