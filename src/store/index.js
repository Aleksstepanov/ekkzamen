import Vue from 'vue';
import Vuex from 'vuex';
import FundamentalsOfIndustrial from './modules/FundamentalsOfIndustrial';
import Safety from './modules/Safety';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    FundamentalsOfIndustrial, Safety,
  },
});
