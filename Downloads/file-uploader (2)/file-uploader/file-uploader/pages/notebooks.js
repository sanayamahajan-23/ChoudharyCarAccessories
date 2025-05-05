export default function Notebooks() {
  const notebooks = ["node.ipynb","decisiontree.ipynb","lda_svm_iris.ipynb","pca_lda_iris.ipynb","pca_lda_cali.ipynb","pca_svm_cali.ipynb","svm_pca_iris.ipynb","dt_cali.ipynb","knn_cali.ipynb","knn.ipynb","lasso_ridge.ipynb","linear.ipynb","linearVSpolynomialSVM.ipynb","pca_svm_diabetes","svm_nonlinear.ipynb","svm1.ipynb","svm_feature_instance_accuracy.ipynb","wine.ipynb"];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Available Notebooks</h1>
      <ul>
        {notebooks.map((name) => (
          <li key={name}>
            <a
              href={`/notebooks/${name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
