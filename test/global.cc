#include "napi.h"

using namespace Napi;

namespace {

Value GetGlobal(const CallbackInfo& info) {
  Napi::Env env = info.Env();

  return env.Global();
}
} // end anonymous namespace

Object InitGlobal(Env env) {
  Object exports = Object::New(env);
  exports["GetGlobal"] = Function::New(env, GetGlobal);

  return exports;
}