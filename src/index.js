import Resolver from "@forge/resolver";
import ForgeUI, { render,StatusLozenge,Badge,Text,
  Fragment, Select, Option, useConfig, CheckboxGroup, 
  Checkbox, Macro, useProductContext, useState ,MacroConfig, 
  TextField, CustomField} from '@forge/ui';

const defaultConfig = {
  steps: "",
  currentstep: ""
};
//id doesn't accept more than 7 steps

const resolver = new Resolver();
resolver.define("getText", ({ payload, context }) => {
  const configuration = context.extension.config || defaultConfig;
  console.log("useConfig():",useConfig())
  console.log("configuration:",configuration)
  return configuration;
});


export const handler = resolver.getDefinitions();

//{ steps: defaultConfig.steps , currentstep: defaultConfig.currentstep }
{
  products: [];
}


const Config = () => {
  
  return (
    <MacroConfig>
      <TextField name="steps" type="text" label="Steps" defaultValue={defaultConfig.steps} description="Define max 7 steps. Example: step1,step2,step3,step4" isRequired />
      <Select name="currentstep" label="Currentstep" placeholder="Select..." Value={defaultConfig.currentstep} isRequired>
        <Option label="1" value="1" />
        <Option label="2" value="2" />
        <Option label="3" value="3" />
        <Option label="4" value="4" />
        <Option label="5" value="5" />
        <Option label="6" value="6" />
        <Option label="7" value="7" />
      </Select>
      <CheckboxGroup label="" name="products">
        <Checkbox value="Background gray" label="Background gray" />
      </CheckboxGroup>
    </MacroConfig>
  );
};
export const config = render(<Config />);
//helperText="Define max 7 steps. Example: step1,step2,step3,step4" 