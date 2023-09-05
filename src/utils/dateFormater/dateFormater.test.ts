import {expect, test} from "vitest"
import {dateFormatter} from "./dateFormater.ts"

const testData = [
    {input: '2012-04-21T18:25:43-05:00', output: '2012 – 4 – 22'},
    {input: '2014-07-14T18:25:43-05:00', output: '2014 – 7 – 15'},
    {input: '123', output: 'Неверные данные'},
    {input: '1AB', output: 'Неверные данные'}
]
test.each(testData)(
    'dateFormatter test with data as ($input, $output)',
    ({input, output}) => {
    expect(dateFormatter(input)).toBe(output)
})
