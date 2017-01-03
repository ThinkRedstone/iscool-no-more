/**
 * Created by thinkredstone on 1/3/17.
 */
const osmosis = require("osmosis")
const format = require("string-format")

//thanks iscool
const monster_changes= 'http://alehlod.iscool.co.il/default.aspx?__EVENTTARGET=dnn%24ctr1319%24TimeTableView%24btnChanges&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=%2FwEPDwUIMjU3MTQzOTcPZBYGZg8WAh4EVGV4dAU%2BPCFET0NUWVBFIEhUTUwgUFVCTElDICItLy9XM0MvL0RURCBIVE1MIDQuMCBUcmFuc2l0aW9uYWwvL0VOIj5kAgEPZBYMAgEPFgIeB1Zpc2libGVoZAICDxYCHgdjb250ZW50BRjXkdeZ16og16HXpNeoINee15PXoteZ151kAgMPFgIfAgUn15HXmdeqINeh16TXqCDXnteT16LXmdedLERvdE5ldE51a2UsRE5OZAIEDxYCHwIFINeb15wg15TXlteb15XXmdeV16og16nXnteV16jXldeqZAIFDxYCHwIFC0RvdE5ldE51a2UgZAIGDxYCHwIFGNeR15nXqiDXodek16gg157Xk9ei15nXnWQCAg9kFgJmD2QWAgIED2QWAmYPZBYGAgIPZBYCZg8PFgYeCENzc0NsYXNzBQtza2luY29sdHJvbB4EXyFTQgICHwFoZGQCAw9kFgJmDw8WBh8DBQtza2luY29sdHJvbB8ABQVMb2dpbh8EAgJkZAIKD2QWAgICD2QWCAIBDw8WAh8BaGRkAgMPDxYCHwFoZGQCBQ9kFgICAg8WAh8BaGQCBw9kFgICAQ9kFgICAQ9kFgwCBQ9kFgJmD2QWDAICDxYCHgVjbGFzcwUKSGVhZGVyQ2VsbGQCBA8WAh8FBQpIZWFkZXJDZWxsZAIGDxYCHwUFCkhlYWRlckNlbGxkAggPFgIfBQUKSGVhZGVyQ2VsbGQCCg8WAh8FBQpIZWFkZXJDZWxsZAIMDxYCHwUFEEhlYWRlckNlbGxCdXR0b25kAgYPEGQQFQAVABQrAwBkZAIIDxYCHwFoZAIKDxYCHwFoZAILD2QWAmYPZBYeZg9kFgICAQ8QZBAVFgbXmCAtIDEG15ggLSAyBteYIC0gMwbXmCAtIDQG15ggLSA1BteZIC0gMQbXmSAtIDIG15kgLSAzBteZIC0gNAbXmSAtIDUG15kgLSA2CNeZ15AgLSAxCNeZ15AgLSAyCNeZ15AgLSAzCNeZ15AgLSA0CNeZ15AgLSA1CNeZ15AgLSA2CNeZ15EgLSAxCNeZ15EgLSAyCNeZ15EgLSAzCNeZ15EgLSA0CNeZ15EgLSA1FRYBMQEyATMBNAE1ATYBNwE4ATkCMTACMjcCMTECMTICMTMCMTQCMTUCMjgCMTcCMTgCMTkCMjACMjEUKwMWZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZxYBAhVkAgIPFgQfBQUKSGVhZGVyQ2VsbB8BaGQCAw8WAh8BaGQCBA8WAh8FBQpIZWFkZXJDZWxsZAIGDxYEHwUFCkhlYWRlckNlbGwfAWhkAgcPFgIfAWhkAggPFgIfBQUKSGVhZGVyQ2VsbGQCCg8WAh8FBQpIZWFkZXJDZWxsZAIMDxYCHwUFCkhlYWRlckNlbGxkAg4PFgIfBQUKSGVhZGVyQ2VsbGQCEA8WBB8FBQpIZWFkZXJDZWxsHwFoZAIRDxYCHwFoZAISDxYEHwUFCkhlYWRlckNlbGwfAWhkAhMPFgIfAWhkAhQPFgQfBQUQSGVhZGVyQ2VsbEJ1dHRvbh8BaGQCDg8PFgIfAAU6157XoteV15PXm9efINecOiAwMy4wMS4yMDE3LCDXqdei15Q6IDE1OjQ0LCDXnteh15o6IEExMTMxOWRkZA%2FvTLJtmZUsUiB084nS7unDHDbK&__VIEWSTATEGENERATOR=CA0B0334&dnn%24ctr1319%24TimeTableView%24ClassesList={}&dnn%24ctr1319%24TimeTableView%24ControlId=&ScrollTop=&__dnnVariable='

const changesParser = (string) => {
    var fields = string.split(',')
    var datestring = fields[0].trim().split('.')
    var date = new Date(datestring[2], datestring[1], datestring[0])
    var time = fields[1].trim()
    var teacher = fields[2].trim()
    var action = fields.slice(3).map(s => s.trim()).join(' ')
    return {date: date, time: time, teacher: teacher, action: action}
}

var class_num = 20
osmosis
    .get(format(monster_changes, class_num))
    .find('#dnn_ctr1319_TimeTableView_PlaceHolder > div > table')
    .select('.MsgCell')
    .then(s => console.log(changesParser(s.innerHTML)))
    .done()

