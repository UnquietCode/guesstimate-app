import {textMixin, isParseableNumber, parseNumber} from './lib.js'

export const item = Object.assign(
  {}, textMixin,
  {
    guesstimateType: 'FUNCTION',
    inputType: 'TEXT',
    formatterName: 'FUNCTION',
    _matchesText(text) { return (text[0] === '=') },

    format(g) {
      return {
        guesstimateType: this.guesstimateType,
        text: this._formatText(g.text),
      }
    },

    errors(g) {return []},
    inputMetrics(g, dGraph) { return inputMetrics(g.text, dGraph) },
    _formatText(text) { return text.substring(1, text.length) },
  }
)

//export function metricGraphToInputs(text, dGraph) {
  //const metrics = inputMetrics(text, dGraph)
  //let inputs = {}
  //metrics.map(m => {inputs[m.readableId] = _.get(m, 'simulation.sample.values') })
  //return inputs
//}

//export function inputMetrics(text, dGraph) {
  //if (!_.has(dGraph, 'metrics')){ return [] }
  //return dGraph.metrics.filter((m) => { return text.includes(m.readableId); });
//}
