import { ref, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { jobService } from "@/services/jobService";
import jobCard from "@/components/jobCard/jobCard.vue";
import {
    IonPage,
    IonContent,
    onIonViewWillEnter
  } from "@ionic/vue";
import { JobDTO } from "@/data/job.dto";


export default defineComponent({
    components:{
        IonPage,
        IonContent,
        jobCard
    },
    setup() {
      const jobs = ref<JobDTO[]>();
      const router = useRouter();

      onIonViewWillEnter(async () => {
        const { get } = jobService();
        jobs.value = await get();

        console.log('jobs', jobs.value)
      });

      return {
        jobs,
        router,
      };
    }
})