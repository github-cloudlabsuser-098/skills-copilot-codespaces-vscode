# Login to Azure
Connect-AzAccount

# Set the desired parameters
$resourceGroupName = "myResourceGroup"
$location = "West Europe"
$storageAccountName = "mystorageaccount"

# Create a resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a storage account
New-AzStorageAccount -ResourceGroupName $resourceGroupName -Name $storageAccountName -Location $location -SkuName Standard_LRS