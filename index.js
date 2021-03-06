/**
 * (template: , ...substitutions: any[]): string
 */

/**
 *
 * @param {TemplateStringsArray} template
 * @param  {...any} substitutions
 */
function tls(template, ...substitutions) {
  return String.raw(
    template,
    ...substitutions.map((substitution) =>
      substitution || isSafeNumber(substitution) ? substitution : '',
    ),
  )
}

/**
 *
 * @param {number} x
 */
function isSafeNumber(x) {
  return typeof x === 'number' && !Number.isNaN(x)
}

module.exports = { tls }
