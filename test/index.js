'use strict';
var koa = require('koa');
var request = require('supertest');
var attach = require('../index');

describe('koa-attach', function() {
    it('should successfully attach "lodash" and "moment" to koa context in the way of an array', function (done){
        var app = koa();
        app.use(attach(['lodash', 'moment']));
        app.use(function* (next) {
          this.should.have.property('lodash');
          this.should.have.property('moment');
          this.body = 'koa-attach';
        });
        var server = app.listen();
        
        request(server).get('/')
                    .expect(200)
                    .end(function(err, res) {
                        server.close();
                        done(err, res);
                    });
    });
    
    it('should successfully attach "lodash" and "moment" to koa context in the way of a dictionary', function (done){
        var app = koa();
        app.use(attach({
            $: 'lodash', 
            m: 'moment'
        }));
        app.use(function* (next) {
          this.should.have.property('$');
          this.should.have.property('m');
          this.body = 'koa-attach';
        });
        var server = app.listen();
        
        request(server).get('/')
                    .expect(200)
                    .end(function(err, res) {
                        server.close();
                        done(err, res);
                    });
    });
});
