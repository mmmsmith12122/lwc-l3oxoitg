import { packd_export_0 } from 'https://srv.divriots.com/packd/lwc@2.4.0';const { registerDecorators,registerComponent,LightningElement } = packd_export_0;;

var _tmpl = void 0;

class App extends LightningElement {
  constructor(...args) {
    super(...args);
    this.title = "Welcome to Lightning Web Components!";
    this.showFeatures = true;
  }

  /**
   * Getter for the features property
   */
  get features() {
    return [{
      label: "Learn in the browser.",
      icon: "utility:edit"
    }, {
      label: "View changes to code instantly with Live Compilation.",
      icon: "utility:refresh"
    }, {
      label: "Style your components with SLDS.",
      icon: "utility:brush"
    }];
  }

}

registerDecorators(App, {
  fields: ["title", "showFeatures"]
});

var app = registerComponent(App, {
  tmpl: _tmpl
});

export { app as default };
