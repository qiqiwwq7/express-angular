'use strict';

require.config({
  baseUrl:'/',
  paths:{
    'jquery':'common/jquery/dist/jquery',
    'angular':'common/angular/angular',
  },
  shim:{
    'jquery':{
      'exports':'jQuery'
    },
    'angular':{
      'exports':'angular',
      'deps':['jquery']
    }
  }
})
