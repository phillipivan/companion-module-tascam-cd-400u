//const { Regex } = require('@companion-module/base')
const { SOM, cmd } = require('./consts.js')

module.exports = function (self) {
	self.setActionDefinitions({
		stop: {
			name: 'Stop',
			description: '',
			options: [],
			callback: async () => {
				self.addCmdtoQueue(SOM + cmd.stop)
			},
		},
		play: {
			name: 'Play',
			description: '',
			options: [],
			callback: async () => {
				self.addCmdtoQueue(SOM + cmd.play)
			},
		},
		pause: {
			name: 'Pause',
			description: '',
			options: [],
			callback: async () => {
				self.addCmdtoQueue(SOM + cmd.pause + '01')
			},
		},
		search: {
			name: 'Search',
			description: '',
			options: [
				{
					type: 'dropdown',
					id: 'mode',
					label: 'Mode',
					choices: self.search_mode,
					default: '00',
				},
			],
			callback: async ({ options }) => {
				self.addCmdtoQueue(SOM + cmd.search + options.mode)
			},
		},
		eject: {
			name: 'Eject',
			description: '',
			options: [],
			callback: async () => {
				self.addCmdtoQueue(SOM + cmd.eject)
			},
		},
		skip: {
			name: 'Skip',
			description: '',
			options: [
				{
					type: 'dropdown',
					id: 'mode',
					label: 'Mode',
					choices: self.skip_mode,
					default: '00',
				},
			],
			callback: async ({ options }) => {
				self.addCmdtoQueue(SOM + cmd.skip + options.mode)
			},
		},
		resumePlaySelectMode: {
			name: 'Resume Play Mode',
			description: '',
			options: [
				{
					type: 'dropdown',
					id: 'mode',
					label: 'Resume Play Mode',
					choices: self.resumePlay_mode,
					default: '00',
				},
			],
			callback: async ({ options }) => {
				self.addCmdtoQueue(SOM + cmd.resumePlaySelect + options.mode)
			},
			//learn: async () => {},
			//subscribe: async () => {},
		},
		repeatMode: {
			name: 'Repeat Mode',
			description: '',
			options: [
				{
					type: 'dropdown',
					id: 'mode',
					label: 'Repeat Mode',
					choices: self.repeat_mode,
					default: '00',
				},
			],
			callback: async ({ options }) => {
				self.addCmdtoQueue(SOM + cmd.repeatModeSelect + options.mode)
			},
			//learn: async () => {},
			//subscribe: async () => {},
		},
		incrPlaySelect: {
			name: 'Incremental Playback',
			description: '',
			options: [
				{
					type: 'dropdown',
					id: 'mode',
					label: 'Mode',
					choices: self.incrPlay_mode,
					default: '00',
				},
			],
			callback: async ({ options }) => {
				self.addCmdtoQueue(SOM + cmd.incrPlaySelect + options.mode)
			},
			//learn: async () => {},
			//subscribe: async () => {},
		},
		clear: {
			name: 'Clear',
			description: '',
			options: [],
			callback: async () => {
				self.addCmdtoQueue(SOM + cmd.clear)
			},
			//learn: async () => {},
			//subscribe: async () => {},
		},
		remoteLocalMode: {
			name: 'Remote/Local Select',
			description: '',
			options: [
				{
					type: 'dropdown',
					id: 'mode',
					label: 'Control Mode',
					choices: self.remoteLocal_mode,
					default: '00',
				},
			],
			callback: async ({ options }) => {
				self.addCmdtoQueue(SOM + cmd.remoteLocalModeSelect + options.mode)
			},
			//learn: async () => {},
			//subscribe: async () => {},
		},
		playMode: {
			name: 'Play Mode Select',
			description: '',
			options: [
				{
					type: 'dropdown',
					id: 'mode',
					label: 'Play Mode',
					choices: self.play_mode,
					default: '00',
				},
			],
			callback: async ({ options }) => {
				self.addCmdtoQueue(SOM + cmd.playModeSelect + options.mode)
			},
			//learn: async () => {},
			//subscribe: async () => {},
		},
		currentTrackTime: {
			name: 'Current Track Time',
			description: '',
			options: [
				{
					type: 'dropdown',
					id: 'mode',
					label: 'Time Mode',
					choices: self.currentTrackTime_sense,
					default: '00',
				},
			],
			callback: async ({ options }) => {
				self.recorder.track.currentTrackTime = options.mode
				self.addCmdtoQueue(SOM + cmd.currentTrackTimeSense + self.recorder.track.currentTrackTime)
			},
			//learn: async () => {},
			//subscribe: async () => {},
		},
		deviceSelect: {
			name: 'Device Select',
			description: '',
			options: [
				{
					type: 'dropdown',
					id: 'mode',
					label: 'Device',
					choices: self.deviceSelect_mode,
					default: '10',
				},
			],
			callback: async ({ options }) => {
				self.addCmdtoQueue(SOM + cmd.deviceSelect + options.mode)
			},
			//learn: async () => {},
			//subscribe: async () => {},
		},
		playAreaSelect: {
			name: 'Play Area Select',
			description: '',
			options: [
				{
					type: 'dropdown',
					id: 'mode',
					label: 'Device',
					choices: self.playArea_mode,
					default: '00',
				},
			],
			callback: async ({ options }) => {
				self.addCmdtoQueue(SOM + cmd.playAreaSelect + options.mode)
			},
			//learn: async () => {},
			//subscribe: async () => {},
		},
		enter: {
			name: 'Enter',
			description: '',
			options: [
				{
					type: 'dropdown',
					id: 'mode',
					label: 'Enter',
					choices: self.enter_mode,
					default: '00',
				},
			],
			callback: async ({ options }) => {
				self.addCmdtoQueue(SOM + cmd.enter + options.mode)
			},
		},
		back: {
			name: 'Back',
			description: '',
			options: [
				{
					type: 'dropdown',
					id: 'mode',
					label: 'Back',
					choices: self.back_mode,
					default: '00',
				},
			],
			callback: async ({ options }) => {
				self.addCmdtoQueue(SOM + cmd.back + options.mode)
			},
		},
	})
}
