from django import forms

class ProductImportForm(forms.Form):
    file = forms.FileField()
