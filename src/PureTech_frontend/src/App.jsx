import React from 'react';
import './index.scss';

function App() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sensores</title>
        <link rel="stylesheet" href="css/styles.css" />
        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="header">
          <div className="container d-flex justify-content-between align-items-center py-3">
            <div className="logo">
              <a href="https://campestreags.com">
                <img src="Puretech.png" alt="PureTech Logo" />
              </a>
            </div>
            <h1 className="m-0 text-center flex-grow-1">Sensores</h1>
            <nav>
              <a href="/index.html" className="custom-btn mx-2">
                Indice
              </a>
              <a href="/dashboard.html" className="custom-btn mx-2">
                Dashboard
              </a>
            </nav>
          </div>
        </header>

        <main className="mt-4">
          <section>
            <div className="container">
              <h2>Estado de los Sensores</h2>
              <div className="row">
                <div className="col-md-6">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Parámetro</th>
                        <th>Unidad</th>
                        <th>Promedio Diario</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Temperatura</td>
                        <td>C°</td>
                        <td>45</td>
                      </tr>
                      <tr>
                        <td>Grasas y aceites</td>
                        <td>mg/L</td>
                        <td>30</td>
                      </tr>
                      <tr>
                        <td>Sólidos suspendidos totales</td>
                        <td>mg/L</td>
                        <td>100</td>
                      </tr>
                      <tr>
                        <td>Demanda química de oxígeno</td>
                        <td>mg/L</td>
                        <td>150</td>
                      </tr>
                      <tr>
                        <td>Carbono orgánico total</td>
                        <td></td>
                        <td>70</td>
                      </tr>
                      <tr>
                        <td>Nitrógeno total</td>
                        <td>mg/L</td>
                        <td>50</td>
                      </tr>
                      <tr>
                        <td>Fósforo total</td>
                        <td>mg/L</td>
                        <td>30</td>
                      </tr>
                      <tr>
                        <td>Huevos de helminto (huevos/litro)</td>
                        <td>Huevos/100ml</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>Escherichia coli</td>
                        <td>(NPM/100ml)</td>
                        <td>10000</td>
                      </tr>
                      <tr>
                        <td>Enterococos fecales</td>
                        <td>(NPM/100ml)</td>
                        <td>12000</td>
                      </tr>
                      <tr>
                        <td>pH (UpH)</td>
                        <td></td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>Arsénico</td>
                        <td>ppb</td>
                        <td>0.5</td>
                      </tr>
                      <tr>
                        <td>Cianuro</td>
                        <td>mg/L</td>
                        <td>6</td>
                      </tr>
                      <tr>
                        <td>Mercurio</td>
                        <td>Pa</td>
                        <td>0.1</td>
                      </tr>
                      <tr>
                        <td>Plomo</td>
                        <td>mg/L</td>
                        <td>0.5</td>
                      </tr>
                      <tr>
                        <td>Zinc</td>
                        <td>Unidad de medida</td>
                        <td>20</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="col-md-6">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Parámetro</th>
                        <th>Unidad</th>
                        <th>Promedio Diario</th>
                        <th>Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Temperatura</td>
                        <td>°C</td>
                        <td>33</td>
                        <td>Regular</td>
                      </tr>
                      <tr>
                        <td>Grasas y aceites</td>
                        <td>mg/L</td>
                        <td>12</td>
                        <td>Regular</td>
                      </tr>
                      <tr>
                        <td>Sólidos suspendidos totales</td>
                        <td>mg/L</td>
                        <td>65</td>
                        <td>Regular</td>
                      </tr>
                      <tr>
                        <td>Demanda química de oxígeno</td>
                        <td>mg/L</td>
                        <td>100</td>
                        <td>Regular</td>
                      </tr>
                      <tr>
                        <td>Carbono orgánico total</td>
                        <td></td>
                        <td>45</td>
                        <td>Regular</td>
                      </tr>
                      <tr>
                        <td>Nitrógeno total</td>
                        <td>mg/L</td>
                        <td>25</td>
                        <td>Regular</td>
                      </tr>
                      <tr>
                        <td>Fósforo total</td>
                        <td>mg/L</td>
                        <td>12</td>
                        <td>Regular</td>
                      </tr>
                      <tr>
                        <td>Huevos de helminto (huevos/litro)</td>
                        <td>Huevos/100ml</td>
                        <td>0</td>
                        <td>Regular</td>
                      </tr>
                      <tr>
                        <td>Escherichia coli</td>
                        <td>(NPM/100ml)</td>
                        <td>300</td>
                        <td>Irregular</td>
                      </tr>
                      <tr>
                        <td>Enterococos fecales</td>
                        <td>(NPM/100ml)</td>
                        <td>300</td>
                        <td>Irregular</td>
                      </tr>
                      <tr>
                        <td>pH (UpH)</td>
                        <td></td>
                        <td>5</td>
                        <td>Irregular</td>
                      </tr>
                      <tr>
                        <td>Arsénico</td>
                        <td>ppb</td>
                        <td>0.2</td>
                        <td>Regular</td>
                      </tr>
                      <tr>
                        <td>Cianuro</td>
                        <td>mg/L</td>
                        <td>0.5</td>
                        <td>Regular</td>
                      </tr>
                      <tr>
                        <td>Mercurio</td>
                        <td>Pa</td>
                        <td>0.004</td>
                        <td>Regular</td>
                      </tr>
                      <tr>
                        <td>Plomo</td>
                        <td>mg/L</td>
                        <td>0.1</td>
                        <td>Regular</td>
                      </tr>
                      <tr>
                        <td>Zinc</td>
                        <td>Unidad de medida</td>
                        <td>10</td>
                        <td>Regular</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <h2>Límite Máximo Permisible</h2>
              <div className="row">
                <div className="col-md-6">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Parámetro</th>
                        <th>Límite Máximo Permisible</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>pH</td>
                        <td>6 - 9</td>
                      </tr>
                      <tr>
                        <td>Temperatura</td>
                        <td>35°C</td>
                      </tr>
                      <tr>
                        <td>Grasas y aceites</td>
                        <td>18</td>
                      </tr>
                      <tr>
                        <td>Sólidos suspendidos totales</td>
                        <td>72</td>
                      </tr>
                      <tr>
                        <td>Demanda química de oxígeno</td>
                        <td>180</td>
                      </tr>
                      <tr>
                        <td>Carbono orgánico total</td>
                        <td>45</td>
                      </tr>
                      <tr>
                        <td>Nitrógeno total</td>
                        <td>30</td>
                      </tr>
                      <tr>
                        <td>Fósforo total</td>
                        <td>18</td>
                      </tr>
                      <tr>
                        <td>Huevos de helminto (Huevos/Litro)</td>
                        <td>N/A</td>
                      </tr>
                      <tr>
                        <td>Escherichia coli (NPM/100ml)</td>
                        <td>500</td>
                      </tr>
                      <tr>
                        <td>Enterococos fecales (NPM/100ml)</td>
                        <td>400</td>
                      </tr>
                      <tr>
                        <td>Arsénico</td>
                        <td>0.3</td>
                      </tr>
                      <tr>
                        <td>Cianuro</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>Mercurio</td>
                        <td>0.015</td>
                      </tr>
                      <tr>
                        <td>Plomo</td>
                        <td>0.3</td>
                      </tr>
                      <tr>
                        <td>Zinc</td>
                        <td>15</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-4">
          <div className="container text-center">
            <p>&copy; 2024 PureTech</p>
          </div>
        </footer>

        {/* Bootstrap JS y dependencias */}
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
      </body>
    </html>
  );
}

export default App;
