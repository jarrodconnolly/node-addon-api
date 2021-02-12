'use strict';
const buildType = process.config.target_defaults.default_configuration;
const assert = require('assert');

test(require(`./build/${buildType}/binding.node`));
test(require(`./build/${buildType}/binding_noexcept.node`));

function test(binding) {
    const {
        GetGlobal
    } = binding.global;

    assert.deepStrictEqual(GetGlobal(), global);
    assert.deepStrictEqual(GetGlobal().global, global);

    global.foo = 42;
    assert.strictEqual(GetGlobal().foo, 42);
}