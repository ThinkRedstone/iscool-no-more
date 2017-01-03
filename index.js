/**
 * Created by thinkredstone on 1/3/17.
 */
const osmosis = require("osmosis")


osmosis
    .get('http://alehlod.iscool.co.il/default.aspx?__EVENTTARGET=dnn%24ctr1319%24TimeTableView%24btnChanges&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=%2FwEPDwUIMjU3MTQzOTcPZBYGZg8WAh4EVGV4dAU%2BPCFET0NUWVBFIEhUTUwgUFVCTElDICItLy9XM0MvL0RURCBIVE1MIDQuMCBUcmFuc2l0aW9uYWwvL0VOIj5kAgEPZBYMAgEPFgIeB1Zpc2libGVoZAICDxYCHgdjb250ZW50BRjXkdeZ16og16HXpNeoINee15PXoteZ151kAgMPFgIfAgUn15HXmdeqINeh16TXqCDXnteT16LXmdedLERvdE5ldE51a2UsRE5OZAIEDxYCHwIFINeb15wg15TXlteb15XXmdeV16og16nXnteV16jXldeqZAIFDxYCHwIFC0RvdE5ldE51a2UgZAIGDxYCHwIFGNeR15nXqiDXodek16gg157Xk9ei15nXnWQCAg9kFgJmD2QWAgIED2QWAmYPZBYGAgIPZBYCZg8PFgYeCENzc0NsYXNzBQtza2luY29sdHJvbB4EXyFTQgICHwFoZGQCAw9kFgJmDw8WBh8DBQtza2luY29sdHJvbB8ABQVMb2dpbh8EAgJkZAIKD2QWAgICD2QWCAIBDw8WAh8BaGRkAgMPDxYCHwFoZGQCBQ9kFgICAg8WAh8BaGQCBw9kFgICAQ9kFgICAQ9kFgwCBQ9kFgJmD2QWDAICDxYCHgVjbGFzcwUKSGVhZGVyQ2VsbGQCBA8WAh8FBQpIZWFkZXJDZWxsZAIGDxYCHwUFCkhlYWRlckNlbGxkAggPFgIfBQUKSGVhZGVyQ2VsbGQCCg8WAh8FBQpIZWFkZXJDZWxsZAIMDxYCHwUFEEhlYWRlckNlbGxCdXR0b25kAgYPEGQQFQAVABQrAwBkZAIIDxYCHwFoZAIKDxYCHwFoZAILD2QWAmYPZBYeZg9kFgICAQ8QZBAVFgbXmCAtIDEG15ggLSAyBteYIC0gMwbXmCAtIDQG15ggLSA1BteZIC0gMQbXmSAtIDIG15kgLSAzBteZIC0gNAbXmSAtIDUG15kgLSA2CNeZ15AgLSAxCNeZ15AgLSAyCNeZ15AgLSAzCNeZ15AgLSA0CNeZ15AgLSA1CNeZ15AgLSA2CNeZ15EgLSAxCNeZ15EgLSAyCNeZ15EgLSAzCNeZ15EgLSA0CNeZ15EgLSA1FRYBMQEyATMBNAE1ATYBNwE4ATkCMTACMjcCMTECMTICMTMCMTQCMTUCMjgCMTcCMTgCMTkCMjACMjEUKwMWZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZxYBAhVkAgIPFgQfBQUKSGVhZGVyQ2VsbB8BaGQCAw8WAh8BaGQCBA8WAh8FBRJIZWFkZXJDZWxsU2VsZWN0ZWRkAgYPFgQfBQUKSGVhZGVyQ2VsbB8BaGQCBw8WAh8BaGQCCA8WAh8FBQpIZWFkZXJDZWxsZAIKDxYCHwUFCkhlYWRlckNlbGxkAgwPFgIfBQUKSGVhZGVyQ2VsbGQCDg8WAh8FBQpIZWFkZXJDZWxsZAIQDxYEHwUFCkhlYWRlckNlbGwfAWhkAhEPFgIfAWhkAhIPFgQfBQUKSGVhZGVyQ2VsbB8BaGQCEw8WAh8BaGQCFA8WBB8FBRBIZWFkZXJDZWxsQnV0dG9uHwFoZAIODw8WAh8ABTrXntei15XXk9eb158g15w6IDAzLjAxLjIwMTcsINep16LXlDogMTU6NDQsINee16HXmjogQTExMzE5ZGRk327oCbH8ZwIW4bqtMhNnKmPv4Tg%3D&__VIEWSTATEGENERATOR=CA0B0334&dnn%24ctr1319%24TimeTableView%24ClassesList=21&dnn%24ctr1319%24TimeTableView%24MainControl%24WeekShift=0&dnn%24ctr1319%24TimeTableView%24ControlId=1&ScrollTop=&__dnnVariable=')
    .find('#dnn_ctr1319_TimeTableView_PlaceHolder > div > table')
    .select('.MsgCell')
    .then(s => console.log(s.innerHTML.trim()))
    .done()