const upperCaser = word => word.toUpperCase();

// const repeat = (operation, num) => {
//   if (num <= 0) return;
//   operation();
//   repeat(operation, --num);
// };

const repeat = (operation, num) => {
  if (num <= 0) return;
  operation();
  return repeat(operation, --num);
};

// module.exports = function repeat(operation, num) {
//   if (num <= 0) return;
//   operation();
//   setTimeout(() => repeat(operation, --num));
// };

const doubleAll = numbers => numbers.map(n => n * 2);

const getShortMessages = arr =>
  arr.filter(e => e.message.length < 50).map(e => e.message);

const checkUsersValid = goodUsers => submittedUsers =>
  submittedUsers.every(submittedUser =>
    goodUsers.some(goodUser => goodUser.id === submittedUser.id)
  );

const countWords = inputWords =>
  inputWords.reduce((acc, cur) => ({ ...acc, [cur]: ++acc[cur] || 1 }), {});

const reduce = ([head, ...tail], fn, acc) =>
  head === undefined ? acc : reduce(tail, fn, fn(acc, head));

// const duckCount = (...ducks) => ducks.filter(duck => 'quack' in duck).length;
const duckCount = (...ducks) =>
  ducks.filter(duck => Object.prototype.hasOwnProperty.call(duck, 'quack'))
    .length;

// const logger = head => (...tail) => console.log.apply(console, [head, ...tail]);
const logger = namespace => console.log.bind(console, namespace);

const map = (items, fn) => items.reduce((acc, cur) => [...acc, fn(cur)], []);

const spy = (obj, method) => {
  const spy = { count: 0 };
  const original = obj[method];
  obj[method] = function() {
    ++spy.count;
    return original.apply(this, arguments);
  };
  return spy;
};

const trampoline = fn => {
  if (fn && typeof fn === 'function') {
    fn = fn();
  }
  return fn;
};

// module.exports = function(fn, num) {
//   return trampoline(() => repeat(fn, num));
// };

const loadUsers = (userIds, load, done) => {
  const users = [];
  let completed = 0;
  const length = userIds.length;
  for (var i = 0; i < length; i++) {
    load(userIds[i], user => {
      users[i] = user;
      ++completed;
      if (length - 1 === completed) return done(users);
    });
  }
};

var loremIpsum = {
  name: 'lorem-ipsum',
  version: '0.1.1',
  dependencies: {
    optimist: {
      version: '0.3.7',
      dependencies: {
        wordwrap: {
          version: '0.0.2'
        }
      }
    },
    inflection: {
      version: '1.2.6'
    }
  }
};

const getDependencies = (tree, result) => {
  const deps = tree.dependencies || [];
  const r = result || new Set();
  Object.keys(deps).forEach(dep => {
    const depStr = `${dep}@${deps[dep].version}`;
    r.add(depStr);
    getDependencies(deps[dep], r);
  });
  return r;
};

function curryN(fn, n) {
  if (typeof n !== 'number') n = fn.length;

  function genCurry(prev) {
    return function(arg) {
      var args = prev.concat(arg);
      if (args.length < n) return genCurry(args);
      return fn.apply(this, args);
    };
  }

  return genCurry([]);
}

module.exports = Function.prototype.call.bind(Array.prototype.slice);

module.exports = upperCaser;
module.exports = repeat;
module.exports = doubleAll;
module.exports = getShortMessages;
module.exports = checkUsersValid;
module.exports = countWords;
module.exports = reduce;
module.exports = duckCount;
module.exports = logger;
module.exports = map;
module.exports = spy;
module.exports = loadUsers;
// module.exports = getDependencies;
module.exports = curryN;
