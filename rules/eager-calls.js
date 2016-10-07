'use strict';

const {containsIdentifier} = require('./utils/contains-identifier');

const getNames = items => items.map(item => item.name);

function getVariablesInScope(context) {
  return context.getScope()
    .variables
    .map(ref => ref.name);
}

function create(context) {
  let scopeStack = [];

  const incrementLevel = node => {
    scopeStack.unshift(getVariablesInScope(context));
  };
  const decrementLevel = () => {
    scopeStack.shift();
  };

  return {
    CallExpression(node) {
      const argNames = getNames(node.arguments);
      const currentBlockScopeVariables = scopeStack[0];
      if (scopeStack.length <= 1 || node.callee.type === 'CallExpression') {
        return;
      }

      try {
        currentBlockScopeVariables.some(variable => containsIdentifier(variable, node))
      }
      catch(error) {
        console.log(currentBlockScopeVariables, node);
      }
      if (currentBlockScopeVariables.some(variable => containsIdentifier(variable, node))) {
        return;
      };
      context.report({
        message: `Call could be made in a parent function.`,
        node
      });
    },
    Program: incrementLevel,
    FunctionDeclaration: incrementLevel,
    FunctionExpression: incrementLevel,
    ArrowFunctionExpression: incrementLevel,
    'FunctionDeclaration:exit': decrementLevel,
    'FunctionExpression:exit': decrementLevel,
    'ArrowFunctionExpression:exit': decrementLevel,
  };
}

module.exports = {
  create,
  meta: {
    docs: {
      description: 'Require calls to be made as soon as possible'
    }
  }
};
