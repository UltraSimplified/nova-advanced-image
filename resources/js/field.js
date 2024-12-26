import IndexField from "@/components/IndexField";
import DetailField from "@/components/DetailField";
import FormField from "@/components/FormField";

Nova.booting((Vue) => {
  Vue.component("index-image-cropper", IndexField);
  Vue.component("detail-image-cropper", DetailField);
  Vue.component("form-image-cropper", FormField);
});
