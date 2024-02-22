#!/usr/bin/env/bash

power_text=(
	width=0
	label.color="$P_DYNAMIC_ISLAND_COLOR_TRANSPARENT"
	label.padding_left=0
	label.padding_right=0
	label.font="$P_DYNAMIC_ISLAND_FONT:Bold:14.0"
	label.y_offset=-17
	label.align=right
	background.padding_left=5
	background.padding_right=0
	drawing=off
)

power_background=(
	width="$P_DYNAMIC_ISLAND_BATTERY_EXPAND_WIDTH"
	background.height="$P_DYNAMIC_ISLAND_DEFAULT_HEIGHT"
	background.color="$P_DYNAMIC_ISLAND_COLOR_TRANSPARENT"
	background.border_color="$P_DYNAMIC_ISLAND_COLOR_TRANSPARENT"
	background.corner_radius="$P_DYNAMIC_ISLAND_DEFAULT_CORNER_RADIUS"
	background.padding_left=0
	background.padding_right=0
	background.y_offset=0
	background.shadow.drawing=off
	drawing=off
)

power_icon=(
	label.color="$P_DYNAMIC_ISLAND_COLOR_TRANSPARENT"
	label.font="$P_DYNAMIC_ISLAND_FONT:Bold:14.0"
	y_offset=-17
	drawing=off
)

dynamic-island-sketchybar --add item island.power_text popup.island \
	--set island.power_text "${power_text[@]}" \
	--add item island.power_background popup.island \
	--set island.power_background "${power_background[@]}" \
	--add item island.power_icon popup.island \
	--set island.power_icon "${power_icon[@]}"
