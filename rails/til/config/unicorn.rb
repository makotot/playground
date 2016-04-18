# coding: utf-8

worker_processes 2

stderr_path File.expand_path('../../log/unicorn/stderr.log', __FILE__)
stdout_path File.expand_path('../../log/unicorn/stdout.log', __FILE__)

pid File.expand_path('../../log/unicorn.pid', __FILE__)

preload_app false
