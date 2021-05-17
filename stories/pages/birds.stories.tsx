import React from "react"
import { Page } from "../../src/pages/birds"

export default {
	title: "pages/birds",
	component: Page
}

const Template = (args) => {
	return (
		<div style={{
			height: "100vh"
		}}>
			<Page {...args} />
		</div>
	)
}
Template.args = {}

export const Standard: any = Template.bind({})
Standard.args = { ...Template.args }
Standard.parameters = {
	layout: "fullscreen"
}
