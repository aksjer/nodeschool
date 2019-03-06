// console.log('BONJOUR ES6');

// function hi(name) {
//   console.log(`Bonjour, ${name} !`);
//   console.log(`Ton nom en minuscules est "${name.toLowerCase()}".`);
// }

// hi(process.argv[2]);

// const variables = process.argv.slice(2);
// const first = variables.map(e => e[0]).reduce((acc, cur) => acc + cur, '');
// console.log(`[${variables}] devient "${first}"`);

// var foot = {
//   kick: function() {
//     this.yelp = 'Aïeuh !';
//     setImmediate(() => console.log(this.yelp));
//   }
// };
// foot.kick();

// const obj = {};
// [, obj.username, obj.email] = process.argv.slice(2);

// console.log(obj);
// const args = process.argv.slice(2);
// const min = Math.min(...args);
// console.log(`Le minimum de [${args}] est ${min}`);

// module.exports = function average(...args) {
//   return args.reduce((acc, cur) => acc + cur, 0) / args.length;
// };

// module.exports = function midpoint(a = 0, b = 1) {
//   return (a + b) / 2;
// };

// module.exports = (text, n = text.length) => text + '!'.repeat(n);

// console.log(
//   html`
//     <b>${process.argv[2]} says</b>: "${process.argv[3]}"
//   `
// );

// function html(pieces, ...substitutions) {
//   var result = pieces[0];
//   for (var i = 0; i < substitutions.length; ++i) {
//     result += escape(substitutions[i]) + pieces[i + 1];
//   }

//   return result;
// }

// function escape(s) {
//   return s
//     .replace(/&/g, '&amp;')
//     .replace(/</g, '&lt;')
//     .replace(/>/g, '&gt;')
//     .replace(/'/g, '&apos;')
//     .replace(/"/g, '&quot;');
// }
