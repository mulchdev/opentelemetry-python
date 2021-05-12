window.BENCHMARK_DATA = {
  "lastUpdate": 1620833770892,
  "repoUrl": "https://github.com/mulchdev/opentelemetry-python",
  "entries": {
    "OpenTelemetry Python Benchmarks - Python 3.9 - propagator": [
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dad4b2ba42a7094f285b6eabf6d86d3ecad3afc5",
          "message": "updating changelogs and version to 1.2.0, 0.21b0 (#1841)",
          "timestamp": "2021-05-11T20:58:24-07:00",
          "tree_id": "bcca2b6e0d0cfa3b8cfb5ddffdbb7c638f9862d9",
          "url": "https://github.com/mulchdev/opentelemetry-python/commit/dad4b2ba42a7094f285b6eabf6d86d3ecad3afc5"
        },
        "date": 1620833763721,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 97157.8947646029,
            "unit": "iter/sec",
            "range": "stddev: 0.000007250954451487724",
            "extra": "mean: 10.29252437409055 usec\nrounds: 13662"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 156066.14846880073,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075479535708003245",
            "extra": "mean: 6.407539429986706 usec\nrounds: 51547"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - propagator": [
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dad4b2ba42a7094f285b6eabf6d86d3ecad3afc5",
          "message": "updating changelogs and version to 1.2.0, 0.21b0 (#1841)",
          "timestamp": "2021-05-11T20:58:24-07:00",
          "tree_id": "bcca2b6e0d0cfa3b8cfb5ddffdbb7c638f9862d9",
          "url": "https://github.com/mulchdev/opentelemetry-python/commit/dad4b2ba42a7094f285b6eabf6d86d3ecad3afc5"
        },
        "date": 1620833764205,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 61772.61238481567,
            "unit": "iter/sec",
            "range": "stddev: 0.000017052436732198747",
            "extra": "mean: 16.18840391224591 usec\nrounds: 8742"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 98340.58913243836,
            "unit": "iter/sec",
            "range": "stddev: 0.000029006102345584413",
            "extra": "mean: 10.16874119650909 usec\nrounds: 43477"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - propagator": [
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dad4b2ba42a7094f285b6eabf6d86d3ecad3afc5",
          "message": "updating changelogs and version to 1.2.0, 0.21b0 (#1841)",
          "timestamp": "2021-05-11T20:58:24-07:00",
          "tree_id": "bcca2b6e0d0cfa3b8cfb5ddffdbb7c638f9862d9",
          "url": "https://github.com/mulchdev/opentelemetry-python/commit/dad4b2ba42a7094f285b6eabf6d86d3ecad3afc5"
        },
        "date": 1620833766575,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 90385.40314189253,
            "unit": "iter/sec",
            "range": "stddev: 0.000002735215472450095",
            "extra": "mean: 11.06373336002207 usec\nrounds: 12500"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 169933.5134972985,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020675261595137736",
            "extra": "mean: 5.8846544123028295 usec\nrounds: 54348"
          }
        ]
      }
    ]
  }
}