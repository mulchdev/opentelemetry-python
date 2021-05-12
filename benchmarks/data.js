window.BENCHMARK_DATA = {
  "lastUpdate": 1620833764984,
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
    ]
  }
}