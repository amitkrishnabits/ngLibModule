import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class NaLibExampleService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: NaLibExampleService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: NaLibExampleService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: NaLibExampleService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NaLibExampleComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: NaLibExampleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.1", type: NaLibExampleComponent, selector: "lib-na-lib-example", ngImport: i0, template: `
    <p>
      <button>my library button</button>
      na-lib-example works!
    </p>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: NaLibExampleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-na-lib-example', template: `
    <p>
      <button>my library button</button>
      na-lib-example works!
    </p>
  ` }]
        }] });

class NaLibExampleModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: NaLibExampleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.1", ngImport: i0, type: NaLibExampleModule, declarations: [NaLibExampleComponent], exports: [NaLibExampleComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: NaLibExampleModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: NaLibExampleModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NaLibExampleComponent
                    ],
                    imports: [],
                    exports: [
                        NaLibExampleComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of na-lib-example
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NaLibExampleComponent, NaLibExampleModule, NaLibExampleService };
//# sourceMappingURL=na-lib-example.mjs.map
