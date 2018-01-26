import Object from '@ember/object'
import sinon from 'sinon'

export function injectMock (context, name, definition = {}) {
  const stub = Object.create(definition)
  const mock = sinon.mock(stub)
  context.register(`service:${name}`, { create: () => stub })
  context.inject.service(name, { as: name })
  return mock
}
