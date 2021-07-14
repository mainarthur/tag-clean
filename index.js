/**
 * (template: , ...substitutions: any[]): string
 */

/**
 *
 * @param {{ raw: readonly string[] | ArrayLike<string> }} template
 * @param  {...any} substitutions
 */
function tls(template, ...substitutions) {
  return String.raw(
    template,
    substitutions.map((substitution) => (substitution ? substitution : '')),
  )
}

module.exports = { tls }
