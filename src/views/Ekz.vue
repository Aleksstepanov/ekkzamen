<template>
  <div>
    <h2>{{ returnName[id-1].name }}</h2>
    <hr>
    <EkzItem v-bind:Questions="returnName[id-1].questions[returnCount]"/>
    <div class="buttons">
      <button class="btn waves-effect waves-light"
              type="submit" name="action" v-on:click="ReplyClick">
              Reply
        <i class="material-icons right">send</i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import EkzItem from '@/components/EkzItem.vue';

export default {
  name: 'Ekz',
  components: {
    EkzItem,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['returnName', 'returnResult']),
    returnCount() {
      return this.returnResult.count;
    },
  },
  methods: {
    ...mapActions(['Reaply']),
    ReplyClick() {
      const answer = {
        id: this.returnName[this.id - 1].questions[this.returnCount].count,
        result: true,
      };
      if (this.returnName[this.id - 1].questions.length > this.returnResult.count + 1) {
        this.Reaply(answer);
      } else console.log('End');
    },
  },
};
</script>

<style lang="scss" scoped>
 h4, h2 {
   text-align: center;
 }
 .buttons {
   display: flex;
   justify-content: space-around;
 }
</style>
