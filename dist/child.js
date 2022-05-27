import { packd_export_0 } from 'https://srv.divriots.com/packd/lwc@2.4.0';const { registerTemplate,registerDecorators,registerComponent,LightningElement } = packd_export_0;;

function tmpl($api, $cmp, $slotset, $ctx) {
  const {s: api_slot, d: api_dynamic_text, t: api_text, h: api_element} = $api;
  return [api_element("div", {
    classMap: {
      "slds-m-horizontal_xx-small": true,
      "slds-m-bottom_x-small": true
    },
    key: 0
  }, [api_slot("icon", {
    attrs: {
      "name": "icon"
    },
    key: 1
  }, [], $slotset), api_element("span", {
    classMap: {
      "slds-p-left_small": true
    },
    key: 2
  }, [api_text(api_dynamic_text($cmp.label))])])];
}
var _tmpl = registerTemplate(tmpl);
tmpl.slots = ["icon"];
tmpl.stylesheets = [];
tmpl.stylesheetTokens = {
  hostAttribute: "undefined-src_child-host",
  shadowAttribute: "undefined-src_child"
};

class Child extends LightningElement {
  constructor(...args) {
    super(...args);
    this.label = "";
  }

}

registerDecorators(Child, {
  publicProps: {
    label: {
      config: 0
    }
  }
});

/**
 * Show an item
 */
var child = registerComponent(Child, {
  tmpl: _tmpl
});

export { child as default };
