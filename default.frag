/*
 * Copyright (C) 2012  Oliver McFadden <omcfadde@gmail.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

#version 100
//#pragma optimize(off)

precision mediump float;

uniform sampler2D u_fragmentMap0;
uniform lowp vec4 u_glColor;
uniform lowp float u_gamma;

varying vec2 var_TexDiffuse;
varying lowp vec4 var_Color;

void main(void)
{
	vec4 color = texture2D(u_fragmentMap0, var_TexDiffuse) * u_glColor * var_Color;
	gl_FragColor = pow(color, vec4(1.0 / u_gamma)); 
}
