'use strict';

exports.fibonacciSeries = async ctx => {
    const n = ctx.params.number;
    try {
        let a = 0, b = 1, f = 1;
        let series = [];
        series.push(a, b)
        for (let i = 2; i < n; i++) {
            f = a + b;
            a = b;
            b = f;
            series.push(f)
        }
        ctx.status = 200;
        ctx.body = {
            data : series,
            message : "Fibonacci series generated successfully"
        };
    } catch (err) {
        ctx.status = err.statusCode || err.status || 500;
        ctx.body = {
            message: err.message
        };
    }
}
