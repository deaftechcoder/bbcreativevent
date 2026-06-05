import service from "./service";
import gallery from "./gallery";
import testimonial from "./testimonial";
import faq from "./faq";
import team from "./team";

export const schemaTypes = [
  service,
  gallery,
  testimonial,
  faq,
  team,
];

export const schema = {
  types: schemaTypes,
};