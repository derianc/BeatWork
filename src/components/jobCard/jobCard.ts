import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { jobService } from "@/services/jobService";
import {
    IonCard,
    IonImg,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent
  } from "@ionic/vue";


export default defineComponent({
  components: {
    IonCard,
    IonImg,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
  },
  setup() {
    const router = useRouter();

    return {
      router,
      jobService
    };
  },
  props: {
    job: {
        type: Object,
        required: true
    }
  }
});