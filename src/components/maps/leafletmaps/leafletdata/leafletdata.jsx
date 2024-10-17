/* eslint-disable no-tabs */
import React from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Popup, CircleMarker, Polyline, Rectangle, Polygon, Circle } from 'react-leaflet'
export function Basicmaps () {
  const position = [51.505, -0.09]

  return (
    <div>

      <MapContainer center={position} zoom={13} scrollWheelZoom={true} className='mapleaflet ht-300' id="leaflet1" style={{ height: '300px' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>

    </div>
  )
}

// With Popup
export function Basic1 () {
  const redOptions = { color: 'red' }
  const center = [51.51, -0.12]
  return (
    <div>
<MapContainer center={center} zoom={13} scrollWheelZoom={true} className="ht-300" id="leaflet2" style={{ height: '300px' }}>
								<TileLayer
										attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
										url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
									/>
									<CircleMarker
										center={[51.51, -0.12]}
										pathOptions={redOptions}
										radius={20}
									>

										<Popup >Popup in CircleMarker</Popup>

									</CircleMarker>
								</MapContainer>
                </div>
  )
}

// WithCircle
export function Basic2 () {
  // Row-3
  const fillBlueOptions = { fillColor: 'blue' }
  const blackOptions = { color: 'black' }
  const limeOptions = { color: 'lime' }
  const purpleOptions = { color: 'purple' }
  const redOptions1 = { color: 'red' }
  const polyline = [[51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12]
  ]

  const center1 = [51.51, -0.12]
  const multiPolyline = [
    [
      [51.5, -0.1],
      [51.5, -0.12],
      [51.52, -0.12]
    ],
    [
      [51.5, -0.05],
      [51.5, -0.06],
      [51.52, -0.06]
    ]
  ]

  const polygon = [
    [51.515, -0.09],
    [51.52, -0.1],
    [51.52, -0.12]
  ]

  const multiPolygon = [
    [
      [51.51, -0.12],
      [51.51, -0.13],
      [51.53, -0.13]
    ],
    [
      [51.51, -0.05],
      [51.51, -0.07],
      [51.53, -0.07]
    ]
  ]

  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06]
  ]
  return (
    <div>
  <MapContainer center={center1} zoom={13} scrollWheelZoom={true} className="ht-200 ht-sm-300 ht-md-400" id="leaflet3" style={{ height: '300px' }}>
									<TileLayer
										attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
										url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
									/>
									<Circle center={center1} pathOptions={fillBlueOptions} radius={200} />
									<CircleMarker
										center={[51.51, -0.12]}
										pathOptions={redOptions1}
										radius={20}
									>
										<Popup>Popup in CircleMarker</Popup>
									</CircleMarker>
									<Polyline pathOptions={limeOptions} positions={polyline} />
									<Polyline pathOptions={limeOptions} positions={multiPolyline} />
									<Polygon pathOptions={purpleOptions} positions={polygon} />
									<Polygon pathOptions={purpleOptions} positions={multiPolygon} />
									<Rectangle bounds={rectangle} pathOptions={blackOptions} />
								</MapContainer>
                </div>
  )
}
