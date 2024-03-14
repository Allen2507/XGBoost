from flask import Flask, render_template, jsonify, request
import pickle
import numpy as np
from sklearn.preprocessing import LabelEncoder

app = Flask(__name__)

md = pickle.load(open('model.pkl', 'rb'))

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def result():
    
        sku = int(request.form['SKU'])
        availability = int(request.form['Availability'])
        stock_levels = int(request.form['Stock levels'])
        costs = float(request.form['Costs'])
        customer_demographics = int(request.form['Customer demographics'])
        defect_rates = float(request.form['Defect rates'])
        inspection_results = int(request.form['Inspection results'])
        lead_time = int(request.form['Lead time'])
        lead_times = int(request.form['Lead times'])
        manufacturing_lead_time = int(request.form['Manufacturing lead time'])
        count_of_products_sold = int(request.form['Number of products sold'])
        order_quantity = int(request.form['Order quantities'])
        price = float(request.form['Price'])
        product_type = int(request.form['Product type'])
        production_volume = int(request.form['Production volumes'])

        X= np.array([[sku, availability, stock_levels, costs, customer_demographics, 
                      defect_rates, inspection_results, lead_time, lead_times, 
                      manufacturing_lead_time, count_of_products_sold, order_quantity, 
                      price, product_type, production_volume]])

        demand_percentage = "{:.2f}".format((order_quantity/(order_quantity + count_of_products_sold)) * 100)
        
        y_prediction = md.predict(X)

        result_array = [y_prediction, demand_percentage]
        
        return render_template('predict.html', prediction=result_array)
        

@app.route('/form')
def form():
    return render_template('form.html')

if __name__ == '__main__':
    app.run(debug=False, port=80, threaded=True)